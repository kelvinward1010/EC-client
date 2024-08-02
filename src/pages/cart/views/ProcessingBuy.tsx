import styles from "./ProcessingBuy.module.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, message, Steps, theme } from "antd";
import ProcessingOne from "../components/processing/ProcessingOne";
import { sessionService } from "../../../utils/storage";
import ProcessingTwo from "../components/processing/ProcessingTwo";
import ProcessingThree from "../components/processing/ProcessingThree";
import ProcessingFour from "../components/processing/ProcessingFour";
import { PAYMENTMETHODS } from "../../../constant";
import { IOrderInCart } from "../../../types/order";

export function ProcessingBuy() {
    const [FormPersonalInfomation] = Form.useForm();
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [valuePayment, setValuePayment] = useState(PAYMENTMETHODS[0].value);

    const datawillbuy = sessionService.getStorage("datatobuy");
    const personalinfomation = sessionService.getStorage("personalinfomation");
    const paymentmethod = sessionService.getStorage("paymentmethod");
    const yourinvoice = sessionService.getStorage("yourinvoice");

    const next = () => {
        const dataPersonalInfomation = FormPersonalInfomation.getFieldsValue([
            "name",
            "phone",
            "address",
        ]);
        if (current == 1) {
            if (
                !dataPersonalInfomation.name ||
                !dataPersonalInfomation.phone ||
                !dataPersonalInfomation.address
            ) {
                setCurrent(current);
                message.warning("Bạn cần nhập đủ thông tin");
            } else {
                const data = {
                    name: dataPersonalInfomation.name,
                    phone: dataPersonalInfomation.phone,
                    address: dataPersonalInfomation.address,
                };
                sessionService.setStorage("personalinfomation", data);
                setCurrent(current + 1);
            }
        } else if (current == 2) {
            sessionService.setStorage("paymentmethod", {
                paymentmethod: valuePayment,
            });
            setCurrent(current + 1);
        } else {
            setCurrent(current + 1);
        }
    };
    const prev = () => setCurrent(current - 1);

    const steps = [
        {
            title: "Tiếp nhận & xác minh",
            content: <ProcessingOne data={datawillbuy} />,
        },
        {
            title: "Địa chỉ giao hàng",
            content: <ProcessingTwo form={FormPersonalInfomation} />,
        },
        {
            title: "Phương thức thanh toán",
            content: (
                <ProcessingThree
                    valuePayment={valuePayment}
                    setValuePayment={setValuePayment}
                />
            ),
        },
        {
            title: "Xác minh thông tin và đặt hàng",
            content: (
                <ProcessingFour
                    yourinvoice={yourinvoice}
                    personalinfomation={personalinfomation}
                    paymentmethod={paymentmethod}
                    productwillbuy={datawillbuy}
                />
            ),
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {
        lineHeight: "100%",
        height: "auto",
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    const handleFinished = useCallback(() => {
        const carfData: IOrderInCart = {
            personalinfomation: personalinfomation,
            idUser: "???",
            paymentmethod: paymentmethod?.paymentmethod,
            yourinvoice: yourinvoice,
            products: datawillbuy,
            completed: false,
        };
        console.log(carfData);
        message.success("Processing complete!");
    }, [personalinfomation, datawillbuy]);

    useEffect(() => {
        if (
            current === 1 &&
            personalinfomation.name &&
            personalinfomation.phone &&
            personalinfomation.address
        ) {
            FormPersonalInfomation?.setFieldsValue(personalinfomation);
        }
    }, [personalinfomation, current]);

    useEffect(() => {
        if (paymentmethod.paymentmethod) {
            setValuePayment(paymentmethod.paymentmethod);
        }
    }, []);

    return (
        <div className={styles.container}>
            <Steps current={current} items={items} />
            <div className={styles.boxmain} style={contentStyle}>
                {steps[current].content}
            </div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={handleFinished}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
}
