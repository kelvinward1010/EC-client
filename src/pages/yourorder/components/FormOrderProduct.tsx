import { Flex, Typography } from "antd";
import { IOrder } from "../../../types/order";
import styles from "./FormOrderProduct.module.scss";
import { ButtonConfig } from "../../../components/buttonconfig";
import { joinProductNames } from "../../../utils/string";

interface FormOrderProductProps {
    data: IOrder;
}

const { Text } = Typography;

function FormOrderProduct({ data }: FormOrderProductProps) {
    const convertedName = joinProductNames(data.products);

    return (
        <div className={styles.container}>
            <Flex justify={"space-between"} align={"flex-start"}>
                <div>
                    <Text>{convertedName}</Text>
                    <br />
                    <Text>Time: {data.createdAt}</Text>
                    <br />
                    <Text>Trạng thái</Text>
                </div>
                <ButtonConfig lable={"..."} />
            </Flex>
        </div>
    );
}

export default FormOrderProduct;
