import { useScrollTo } from "../../ui/hooks/useScrollTo"
import { Tabs } from "../components/Tabs"
import { TabsButtons } from "../components/TabsButtons"
import { TabsChildren } from "../components/TabsChildren"
import { TabsContent } from "../components/TabsContent"
import { bocados, macarons, panesJamon, panetones, tortas, variedades } from "../data/tabsChildrenList"

export const CakesTabPage = () => {

    const { inViewRef } = useScrollTo('/cakes/cakes-tab')

    return (
        <>
            <section className="cakes_tabs" ref={ inViewRef }>
                <div className="cakes_tabs_buttons">
                    <TabsButtons id='tab1' title="Bocados" />
                    <TabsButtons id='tab2' title="Tortas" />
                    <TabsButtons id='tab3' title="Paneton" />
                    <TabsButtons id='tab4' title="Macarons" />
                    <TabsButtons id='tab5' title="Variedades" />
                    <TabsButtons id='tab6' title="Pan de Jamón" />
                </div>
                <div className="cakes_tabs_options">
                    <Tabs id='tab1'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ bocados } />
                        </TabsContent>
                    </Tabs>
                    <Tabs id='tab2'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ tortas }/>
                        </TabsContent>
                    </Tabs>
                    <Tabs id='tab3'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ panetones }/>
                        </TabsContent>
                    </Tabs>
                    <Tabs id='tab4'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ macarons }/>
                        </TabsContent>
                    </Tabs>
                    <Tabs id='tab5'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ variedades }/>
                        </TabsContent>
                    </Tabs>
                    <Tabs id='tab6'>
                        <TabsContent width="1300px">
                            <TabsChildren tabsItems={ panesJamon }/>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    )
}
