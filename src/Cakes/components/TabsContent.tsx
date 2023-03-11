import { FC } from "react";

interface Props {
    children: React.ReactNode;
    width: string;
}

export const TabsContent: FC<Props> = ({ children, width }) => {
    return (
        <div className="tabs_content" style={{ maxWidth: width }}>
            <div className="tabs_content_body">
                { children } 
            </div>
        </div>
    )
}
