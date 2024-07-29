import { Button, Form, Input, message } from "antd";
import styles from "./ProcessingTwo.module.scss";
import { sessionService } from "../../../../utils/storage";

interface ProcessingTwoProps {
    form: any;
}

export type FieldAdressType = {
    name?: string;
    phone?: string;
    address?: string;
};

function ProcessingTwo({ form }: ProcessingTwoProps) {
    const onFinish = (values: FieldAdressType) => {
        const data = {
            name: values.name,
            phone: values.phone,
            address: values.address,
        };
        sessionService.setStorage("personalinfomation", data);
        message.success("Saved");
    };

    return (
        <div className={styles.container}>
            <Form
                name="form-address-processing"
                form={form}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 19 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldAdressType>
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldAdressType>
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldAdressType>
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: "Please input your address!",
                        },
                    ]}
                >
                    <Input.TextArea rows={2} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 3, span: 19 }}>
                    <Button className={"button-submit"} htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ProcessingTwo;
