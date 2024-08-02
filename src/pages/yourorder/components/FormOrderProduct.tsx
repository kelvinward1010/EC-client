import { Flex, Typography } from "antd";
import { IOrder } from "../../../types/order";
import styles from "./FormOrderProduct.module.scss";
import { ButtonConfig } from "../../../components/buttonconfig";
import { joinProductNames } from "../../../utils/string";
import { ModalDetail } from "./modals/ModalDetail";
import { useState } from "react";
import { DeleteFilled, EyeFilled } from "@ant-design/icons";

interface FormOrderProductProps {
    data: IOrder;
}

const { Text } = Typography;

function FormOrderProduct({ data }: FormOrderProductProps) {
    const convertedName = joinProductNames(data.products);
    const [openDetail, setOpenDetail] = useState<boolean>(false);

    const handleOpenDetail = () => setOpenDetail(true);

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
                <Flex gap={5} justify={"flex-end"} align={"center"}>
                    <ModalDetail
                        ComponentElement={
                            <ButtonConfig
                                onClick={handleOpenDetail}
                                lable={<EyeFilled />}
                            />
                        }
                        open={openDetail}
                        setOpen={setOpenDetail}
                        data={data}
                        title={convertedName}
                    />
                    <ButtonConfig lable={<DeleteFilled />} />
                </Flex>
            </Flex>
        </div>
    );
}

export default FormOrderProduct;
