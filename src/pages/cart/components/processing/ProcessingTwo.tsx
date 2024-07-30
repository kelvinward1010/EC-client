import { Form, Input } from "antd";
import styles from "./ProcessingTwo.module.scss";

interface ProcessingTwoProps {
    form: any;
}

export type FieldAdressType = {
    name?: string;
    phone?: string;
    address?: string;
};

function ProcessingTwo({ form }: ProcessingTwoProps) {
    return (
        <div className={styles.container}>
            <Form
                name="form-address-processing"
                form={form}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 19 }}
                initialValues={{ remember: true }}
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
            </Form>
        </div>
    );
}

export default ProcessingTwo;
