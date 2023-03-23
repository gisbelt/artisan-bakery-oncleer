import { AnimatedNumber } from '../components/AnimatedNumber'

export const CounterPage = () => {

    return (
        <section className='counter'>
            <div className="counter_body">
                <div>
                    <AnimatedNumber number={ 36546 } />
                    <p>Tortas Entregadas</p>
                </div>
                <div>
                    <AnimatedNumber number={ 28 } />
                    <p>Tipos de Postres</p>
                </div>
                <div>
                    <AnimatedNumber number={ 12 } />
                    <p>Miembros del equipo</p>
                </div>
            </div>
        </section>
    )
    }
