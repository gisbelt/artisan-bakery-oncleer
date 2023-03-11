import { Tabs } from "../components/Tabs"
import { TabsButtons } from "../components/TabsButtons"
import { TabsChildren } from "../components/TabsChildren"
import { TabsContent } from "../components/TabsContent"
import { bocados, tortas } from "../data/tabsChildrenList"
import { CakesProvider } from "./context/CakesProvider"

export const CakesTabPage = () => {
    return (
        <CakesProvider>
            <section className="cakes_tabs">
                <div className="cakes_tabs_buttons">
                    <TabsButtons id='tab1' title="Bocados" />
                    <TabsButtons id='tab2' title="Tortas" />
                    <TabsButtons id='tab3' title="Galletas" />
                    <TabsButtons id='tab4' title="Macarons" />
                    <TabsButtons id='tab5' title="Dulces Sueños" />
                    <TabsButtons id='tab6' title="Pan de Jamón" />
                </div>
                <div className="cakes_tabs_options">
                    <Tabs id='tab1'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ bocados }/>
                        </TabsContent>
                    </Tabs>
                    <Tabs id='tab2'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ tortas }/>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </CakesProvider>
    )
}
