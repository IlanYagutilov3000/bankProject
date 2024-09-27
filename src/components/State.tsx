import { FunctionComponent } from "react";

interface StateProps {

}

const State: FunctionComponent<StateProps> = () => {
    return <>
        <div className="containerCards d-flex justify-content-center">
            <div className="card text-bg-dark mb-3 firstCard mx-5" style={{ maxWidth: '18rem' }}>
                <div className="card-header">Balance</div>
                <div className="card-body">
                    <h5 className="card-title">46695₪</h5>
                </div>
            </div>
            <div className="card text-bg-danger mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header">Wasted</div>
                <div className="card-body">
                    <h5 className="card-title">46695₪</h5>
                </div>
            </div>
        </div>
    </>
};

export default State;