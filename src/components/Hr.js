import React from "react";
import { Divider } from "react-native-elements";

export default function Hr() {
    return(
        <Divider
            style={{ width: "100%", marginVertical: 25 }}
            color="#505050"
            width={1}
        />
    );
}