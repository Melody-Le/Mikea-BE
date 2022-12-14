import { RequestHandler } from "express";
import db from "../models";
const {
  user: User,
  cart: Cart,
  lineItem: LineItem,
  variant: Variant,
  product: Product,
} = db;
type Params = {};
type ResBody = {};
type ReqBody = {};
type ReqQuery = {
  q: string;
};

export const findOrCreateCart: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const [cart, created] = await Cart.findOrCreate({
      where: { userId: userAuth.userId },
      defaults: {},
    });
    if (created) {
      return res
        .status(201)
        .json({ message: "Cart have just created for new user", cart });
    } else {
      return res.status(200).json("cart already exists");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const showCart: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const [userCart, created] = await Cart.findOrCreate({
      where: { userId: userAuth.userId },
      defaults: {},
    });
    const { count, rows: lineItems } = await LineItem.findAndCountAll({
      include: {
        model: Variant,
        include: { model: Product, attributes: ["productName"] },
      },
      where: { cartId: userCart.id },
    });
    return res.json({ count, lineItems });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const addItemToCart: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const { variantId } = req.params;
    const [userCart, cartCreated] = await Cart.findOrCreate({
      where: { userId: userAuth.userId },
      defaults: {},
    });
    //find That User already have that LientItem ( cartId, variantId or not. If have => increase qty, If dont have => create line Item:)
    const [lineItem, lineItemCreated] = await LineItem.findOrCreate({
      where: { cartId: userCart.id, variantId: variantId },
      defaults: { qty: 1 },
    });

    if (lineItemCreated) {
      return res.json({ message: "Success to add cart" });
    }
    // If line item already exist => update qty instead:
    const targetVariant = await Variant.findOne({
      where: { id: lineItem.variantId },
      attributes: ["qtyInStock"],
    });
    if (!targetVariant) {
      return res.status(401).json({ message: "can not get product variant" });
    }
    // compare qty in lineItem with qtyInstock, if lineItemqty < qtyInstock => increase. If already same => return "Order Limit Reached"
    if (lineItem.qty < targetVariant.qtyInStock) {
      await LineItem.increment({ qty: +1 }, { where: { id: lineItem.id } });
      res.json({ message: "Success increase quantity in cart" });
    } else res.json({ message: "Order Limit Reached" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to add to cart",
    });
  }
};

export const updateCartItem: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const { updateQty } = req.body;
    const { variantId } = req.params;
    const cart = await Cart.findOne({
      where: { userId: userAuth.userId },
      attributes: ["id"],
    });
    const lineItem = await LineItem.findOne({
      where: { cartId: cart.id, variantId: variantId },
    });

    const targetVariant = await Variant.findOne({
      where: { id: lineItem.variantId },
      attributes: ["qtyInStock"],
    });
    if (!targetVariant) {
      return res.status(401).json({ message: "can not get product variant" });
    }
    const qtyInStock = targetVariant.qtyInStock;
    if (updateQty > qtyInStock) {
      return res.status(400).json({
        error: `Only ${qtyInStock} left, adjust quantity`,
      });
    } else {
      await LineItem.update(
        { qty: updateQty },
        {
          where: {
            id: lineItem.id,
          },
        }
      );
      return res.json({ message: "Success to update cart" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to update cart",
    });
  }
};

export const removeFromCart: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const { variantId } = req.params;
    const cart = await Cart.findOne({
      where: { userId: userAuth.userId },
      attributes: ["id"],
    });
    await LineItem.destroy({
      where: { cartId: cart.id, variantId: variantId },
    });
    res.json({ message: "Success to remove item from cart" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to remove item from cart",
    });
  }
};
export const getLineItems: RequestHandler<
  Params,
  ResBody,
  ReqBody,
  ReqQuery
> = async (req, res) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const userCart = await Cart.findOne({
      where: { userId: userAuth.userId },
      attributes: ["id"],
    });
    const json = req.query.q;
    const variantIds: ReqQuery = JSON.parse(json);
    const variants = await LineItem.findAll({
      where: { variantId: variantIds, cartId: userCart.id },
      attributes: ["qty"],
      include: {
        model: Variant,
        attributes: ["id", "variantImage", "price", "variantDescription"],
        include: {
          model: Product,
          attributes: ["productName"],
        },
      },
    });
    return res.json(variants);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch variants from database",
    });
  }
};
