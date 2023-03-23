import { Line } from "../../ui/components/Line"
import { TeamCards } from "../components/TeamCards"
import { teamItems } from "../data/teamItems"

export const TeamPage = () => {
    return (
        <section className="team">
            <div className="team_body">
                <div className="team_body_text">
                    <h2 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="800" >
                        Nuestro equipo
                    </h2>
                    <Line />
                </div>

                <div className="team_body_cards">
                    <TeamCards items={ teamItems }/>
                </div>
            </div>
        </section>
    )
}
