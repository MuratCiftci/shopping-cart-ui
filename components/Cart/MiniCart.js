import { useCart } from "../../hooks/useCart";
import styles from "./MiniCart.module.css";
import Link from "next/link";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const MiniCart = () => {
  const { cartItems, total } = useCart();

  return (
    <div className={styles.container}>
      <h3
        className={styles.cartTitle}
      >{`Alışveriş Sepetim(${cartItems.length})`}</h3>
      <div className={styles.cartList}>
        {cartItems.length > 0 && (
          <table>
            <tbody>
              {cartItems.map((product) => (
                <tr className={styles.cartTable}>
                  <td>
                    <Link href="/[product]" as={`${product.id}`}>
                      <a>
                        <div className={styles.cartProduct}>
                          <div className={styles.productImg}>
                            <img src={product.image} alt="" />
                          </div>

                          <div className={styles.cartProductContent}>
                            <h3> {product.title.substring(0, 20) + " ..."}</h3>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </td>
                  <td>
                    <div className={styles.quantity}>
                      <p>{`${product.quantity} Adet`}</p>
                    </div>
                  </td>
                  <td>${product.price}</td>
                  <td className={styles.removeProduct}>
                    <DeleteOutlineSharpIcon
                      className={styles.removeIcon}
                      onClick={() => removeProduct(product)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {cartItems.length === 0 && <p>Sepette bir ürün yok</p>}
      </div>
      <div className={styles.cartDetails}>
        <span>Total Cost</span>
        <strong>${total}</strong>
      </div>
      <button className={styles.basketProduct}>
        <Link href="/cart" passHref>
          <a>
            {" "}
            <ShoppingBagOutlinedIcon className={styles.basketIcon}/> <span>Go to Cart</span>
          </a>
        </Link>
      </button>
    </div>
  );
};

export default MiniCart;
