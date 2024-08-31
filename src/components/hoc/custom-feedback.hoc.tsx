import { Typography } from "antd";
import "./custom-feedback.hoc.css";
import { BouncingDotsLoader } from "../bouncing-dots-loader/bouncingDotsLoader";
import { IBasetListProducts } from "../../types/product";
import { IComment } from "../../types/comment";

const { Title } = Typography;

type TitleProps = {
    children: React.ReactNode;
};

function TitleCustomization({ children }: TitleProps) {
    return (
        <div className="titleCustomizationcontainer">
            <Title level={5} className="title-feedback">
                {children}
            </Title>
            <BouncingDotsLoader />
        </div>
    );
}

function TitleNoneDataCustomization({ children }: TitleProps) {
    return (
        <div className={"container-nonedatafeedback"}>
            <Title level={5} className="title-feedback">
                {children}
            </Title>
        </div>
    );
}

export const customConditionalFeedbackHigh =
    (
        loadingFeedBack?: string,
        noDataFeedBack?: string,
        dataEmptyFeedback?: string,
    ) =>
    (Component: React.ComponentType<{ data: IBasetListProducts }>) =>
    (props: { data: IBasetListProducts }) => {
        const { data, isLoading } = props.data;

        if (isLoading)
            return (
                <TitleCustomization>
                    {loadingFeedBack ?? "Loading..."}
                </TitleCustomization>
            );
        if (!data)
            return (
                <TitleCustomization>
                    {noDataFeedBack ?? "No data feedback"}
                </TitleCustomization>
            );
        if (!data.length)
            return (
                <TitleNoneDataCustomization>
                    {dataEmptyFeedback ?? "Data is empty"}
                </TitleNoneDataCustomization>
            );
        return <Component {...props} />;
    };

type CommentProps = {
    data?: IComment[];
};

export const customConditionalCommentsFeedbackHigh =
    (noDataFeedback?: string, dataEmptyFeedback?: string) =>
    (Component: React.ComponentType<CommentProps>) =>
    (props: CommentProps) => {
        const { data } = props;

        if (!data)
            return (
                <TitleCustomization>
                    {noDataFeedback ?? "No data feedback"}
                </TitleCustomization>
            );
        if (!data?.length)
            return (
                <TitleCustomization>
                    {dataEmptyFeedback ?? "Data is empty"}
                </TitleCustomization>
            );

        return <Component {...props} />;
    };
