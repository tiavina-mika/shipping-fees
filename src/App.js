import { useLayoutEffect, useState } from "react";
import "./styles.css";

const order = {
  minimumCommand: 9,
  minimumCommandUnit: "kg",
  forbidMinimumCommand: false,
  shippingFees: 12,
  allowShippingFeesCancel: true
};

const totalWeight = 2;
const totalPrice = 8;

const App = () => {
  const [isValidTotalWeight, setIsValidTotalWeight] = useState(false);
  const [isValidTotalPrice, setIsValidTotalPrice] = useState(false);
  const [orderShippingFees, setOrderShippingFees] = useState(
    order.shippingFees
  );

  /**
   
Si le minimum de commande (order.minimumCommandUnit) est en €

Si le montant global de commande (totalAmount) est inférieur au montant minimum de commande
(order.minimumCommand)

Alors les frais de port sont ceux indiqués dans le BO fournisseur (order.shippingFees)

Si le montant global de commande (totalAmount) est supérieur ou égal au montant minimum de commande 
(order.minimumCommand)

Si le paramètre "annuler les frais de port" (order.allowShippingFeesCancel) est true

Alors les frais de port de la commande sont 0€

Si le paramètre "annuler les frais de port"(order.allowShippingFeesCancel) est false

Alors les frais de port sont ceux indiqués dans le BO fournisseur (order.shippingFees
    
   */

  useLayoutEffect(() => {
    if (!order) return;
    if (order.minimumCommandUnit === "€") {
      if (totalPrice >= order.minimumCommand) {
        if (order.allowShippingFeesCancel) {
          setOrderShippingFees(0);
        }
      } else {
        setIsValidTotalPrice(true);
      }
      // if (order.minimumCommand >= totalPrice) {
      //     if (order.allowShippingFeesCancel) {
      //       setOrderShippingFees(0)
      //     }
      // } else {
      //     setIsValidTotalPrice(true)
      // }
    } else if (order.minimumCommandUnit === "kg") {
      if (order.minimumCommand >= totalWeight) {
        if (order.allowShippingFeesCancel) {
          setOrderShippingFees(0);
        }
      } else {
        setIsValidTotalWeight(true);
      }
    }
  }, []);

  // useLayoutEffect(() => {
  //     if (!order) return
  //     if (order.minimumCommandUnit === "€") {
  //       if (order.minimumCommand >= totalPrice) {
  //           if (order.allowShippingFeesCancel) {
  //             setOrderShippingFees(0)
  //           }
  //       } else {
  //           setIsValidTotalPrice(true)
  //       }
  //     } else if ((order.minimumCommandUnit === "kg")) {
  //       if (order.minimumCommand >= totalWeight) {
  //         if (order.allowShippingFeesCancel) {
  //           setOrderShippingFees(0)
  //         }
  //       } else {
  //         setIsValidTotalWeight(true)
  //       }
  //     }
  // }, [])
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          Shipping Fees : <b>{orderShippingFees}</b>
        </div>
        <div className="row">
          Is valid total price? : <b>{isValidTotalPrice + ""}</b>
        </div>
        <div className="row">
          Is valid total weight? : <b>{isValidTotalWeight + ""}</b>
        </div>
      </div>
    </div>
  );
};

export default App;
