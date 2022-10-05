import { SportsBasketball } from "@mui/icons-material";
import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotel.css";

function SubTotel() {
  return (
    <div className="subtotel">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotel (0 items): <strong>0</strong>
            </p>
            <small className="subtotel__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotel;
