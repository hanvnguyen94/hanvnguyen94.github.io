import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MillenniumFalcon = () => {
  return (
    <FalconSvg
      viewBox="0 0 1607 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g clip-path="url(#clip0)">
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
          d="M1546.56 65.6059L1528.8 61.175C1529.48 60.1141 1530.02 58.9369 1530.36 57.6629C1530.71 56.4038 1530.86 55.1271 1530.8 53.8695L1548.57 58.3004C1548.39 59.5403 1548.14 60.7791 1547.8 62.0108C1547.46 63.2362 1547.04 64.4348 1546.56 65.6059ZM1511.67 53.0008C1511.16 54.8558 1511.4 56.7777 1512.34 58.4126C1513.28 60.0476 1514.8 61.2 1516.63 61.6574C1520.43 62.6019 1524.36 60.2551 1525.41 56.4259C1525.91 54.5714 1525.69 52.649 1524.74 51.0143C1523.81 49.3789 1522.28 48.2264 1520.45 47.7689C1516.66 46.8251 1512.73 49.172 1511.67 53.0008ZM1541.5 89.0891C1541.5 89.0855 1541.51 89.0527 1541.51 89.0495C1541.8 87.9926 1541.67 86.8973 1541.13 85.9659C1540.6 85.0341 1539.73 84.3772 1538.68 84.1169L1534.24 83.0091L1534.22 82.9693L1555.53 79.994C1556.56 79.8483 1557.44 79.0804 1557.72 78.0556L1558.83 74.0214L1524.29 65.4086C1521.62 66.9163 1518.41 67.4562 1515.26 66.6708C1512.1 65.8827 1509.47 63.8987 1507.86 61.0832C1506.24 58.2675 1505.84 54.9582 1506.72 51.7639C1508.53 45.1712 1515.3 41.1304 1521.82 42.756C1524.88 43.5188 1527.44 45.4044 1529.06 48.0778L1563.58 56.6888L1564.69 52.6545C1564.97 51.6303 1564.61 50.5554 1563.77 49.939L1539.54 32.1081C1537.57 30.2761 1535.36 28.7156 1532.94 27.4807C1532.25 27.1291 1531.43 27.1161 1530.71 27.4447C1530.14 27.7051 1529.69 28.1574 1529.42 28.7126L1522.42 26.9683C1522.47 26.359 1522.31 25.7505 1521.94 25.2582C1521.49 24.6354 1520.76 24.2644 1519.99 24.249C1513.22 24.1174 1506.43 26.3188 1500.89 30.4477C1495.26 34.6395 1491.14 40.6661 1489.29 47.4163C1487.12 55.3146 1488.12 63.499 1492.11 70.4623C1492.11 70.4629 1492.11 70.4626 1492.11 70.4631C1494.94 75.4033 1499.1 79.3744 1504.14 81.9467C1504.83 82.2983 1505.65 82.3111 1506.37 81.9826C1506.94 81.7222 1507.4 81.2698 1507.67 80.7149L1514.66 82.4588C1514.61 83.0686 1514.77 83.6765 1515.14 84.1697C1515.6 84.7922 1516.32 85.1633 1517.1 85.1784C1519.45 85.2238 1521.79 84.9841 1524.09 84.4852L1526.28 88.6551C1526.29 88.6824 1526.31 88.7099 1526.32 88.7364C1526.67 89.3527 1527.26 89.7576 1527.9 89.9112C1527.92 89.9163 1527.93 89.9232 1527.96 89.9278L1536.5 92.0597C1537.55 92.3204 1538.64 92.1542 1539.59 91.5911C1540.53 91.028 1541.21 90.1355 1541.5 89.0891Z"
          fill="#D96ED4"
          stroke="#D96ED4"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
          d="M1488 50.3615C1397.82 41.3791 1159.82 75.6686 929.308 284.687C641.162 545.959 366.092 435.241 176.005 235.478C23.9372 75.6686 -4.35778 27.9053 0.503315 24"
          stroke="#D96ED4"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
      </motion.g>
      <motion.defs>
        <clipPath id="clip0">
          <motion.rect width="1607" height="444" fill="white" />
        </clipPath>
      </motion.defs>
    </FalconSvg>
  );
};
const FalconSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default MillenniumFalcon;
