import { Checkbox, Col, Rate, Row, Typography } from "antd";
import { CardProduct } from "../../../components/cardproduct/CardProduct";
import { products } from "../../../data";
import { IProduct } from "../../../types/product";
import styles from "./Search.module.scss";
import type { GetProp } from "antd";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../../../utils/data";
import { STARS, TYPESPRODUCTSCHECKBOX } from "../../../constant/config";

const { Title } = Typography;

export function Search() {
    const [params, setParams] = useSearchParams();
    const keysSearchOnParams = params.getAll("type");
    const keysSearchStarOnParams = params.getAll("rate");

    const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
        checkedValues,
    ) => {
        setParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set("type", checkedValues.join(","));
            return newParams;
        });
    };

    const onChangeRate: GetProp<typeof Checkbox.Group, "onChange"> = (
        checkedValues,
    ) => {
        setParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set("rate", checkedValues.join(","));
            return newParams;
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <div className={styles.box1content}>
                    <Title level={5}>Types</Title>
                    <Checkbox.Group
                        style={{ width: "100%" }}
                        onChange={onChange}
                        name="types"
                        defaultValue={keysSearchOnParams}
                    >
                        <Row wrap>
                            {TYPESPRODUCTSCHECKBOX.map((value, index) => (
                                <Col
                                    span={8}
                                    key={index}
                                    style={{ minWidth: "100px" }}
                                >
                                    <Checkbox
                                        checked={true}
                                        value={value.value}
                                    >
                                        {value.label}
                                    </Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                </div>
                <div className={styles.box1content}>
                    <Title level={5}>Star</Title>
                    <Checkbox.Group
                        style={{ width: "100%" }}
                        name="star"
                        onChange={onChangeRate}
                    >
                        <Row wrap>
                            {STARS.map((value, index) => (
                                <Col
                                    span={24}
                                    key={index}
                                    style={{ minWidth: "100px" }}
                                >
                                    <Checkbox
                                        checked={true}
                                        value={value.toString()}
                                    >
                                        <Rate defaultValue={value} disabled />
                                    </Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                </div>
            </div>
            <div className={styles.box2}>
                {searchProducts(
                    {
                        types:
                            keysSearchOnParams[0]?.split(",")?.map(String) ??
                            [],
                        stars:
                            keysSearchStarOnParams[0]
                                ?.split(",")
                                ?.map(Number) ?? [],
                    },
                    products,
                )
                    ?.slice(0, 5)
                    .map((item: IProduct) => (
                        <CardProduct key={item?._id} item={item} />
                    ))}
            </div>
        </div>
    );
}
