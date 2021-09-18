import React, { useImperativeHandle } from "react";
import { Modal, Button } from "react-bootstrap";

export default class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            totalDebit: 0,
            totalAmount: 0,
            sum: 0,
            k: 0,
            newbalance: 0,
            count:0

        };
    }

    sub = () => {
        this.setState({ count: this.state.totalAmount - this.state.totalDebit });


        const TotalAmt = this.state.totalAmount;
        const DebitAmt = this.state.totalDebit;

        if (TotalAmt > DebitAmt) {
            alert("DebitAmount is greater than Your total amount.Try again");
        } else {
            var n2000 = prompt("Please enter the number of 2000 rup note");
            var n500 = prompt("Please enter the number of 500 rup note");
            var n100 = prompt("Please enter the number of 100 rup note");

            var sum = 2000 * n2000 + 500 * n500 + 100 * n100;
            console.log(sum);
            if (sum == DebitAmt) {
                this.setState({ k: 1 })
            }
            else {
                this.setState({ k: 0 })
            }


        }
    };

    addoldamount = () => {
        this.setState({ newbalance: parseInt(this.state.totalAmount) + parseInt(this.state.totalDebit) })
        console.log(this.state.newbalance)
    }
    debitoldamount = () => {
        this.setState({ newbalance: parseInt(this.state.totalAmount) - parseInt(this.state.totalDebit) })
        console.log(this.state.newbalance)
    }

    render() {
        return (
            <div className="App">
                <div className="container"  style={{marginLeft:"40%",marginTop:"4%"}}>
                    <h1>ATM Machine</h1>
                    {/* <div style={{marginTop:"4%"}}>
                        <h6> 1. Current Transaction : {this.state.count} </h6>
                    </div> */}
                    <div>
                        <h6 style = {{color:"red"}}> 1. your current  balance is : {this.state.newbalance}</h6>
                    </div>
                    <div className="input"  >
                        <div>
                        <legend> Total Amount:</legend>
                        <input
                            type="text"
                            placeholder="Enter...."
                            value={this.state.totalAmount}
                            onChange={(e) => {
                                this.setState({ totalAmount: e.target.value });
                            }}
                        />
                        </div>
                        <div><legend>Total Debit:</legend>
                        <input
                            type="text"
                            placeholder="Enter...."
                            value={this.state.totalDebit}
                            onChange={(e) => {
                                this.setState({ totalDebit: e.target.value });
                            }}
                        />
                        </div>
                    </div>
                    <div style={{marginTop:"4%"}}>
                        <button id="sub" type="submit" className="btn btn-primary" variant="success" onClick={this.sub}>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="justify-content-center">
                    {this.state.k ? <div style={{ marginLeft: "40%", marginTop: "5%" }}><legend> Are you sure you want to continue Y/N..... </legend><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">yes</button> <button className="btn btn-danger" >no</button></div> : <div></div>}
                </div>


                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">What you want ?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label>1- if YOu want to add amount in your current Balance then click on deposit</label>
                                <label>2- if YOu want to debit amount from your current Balance then click on debit</label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.addoldamount} data-dismiss="modal"  >Deposit</button>
                                <button type="button" className="btn btn-secondary" onClick={this.debitoldamount} data-dismiss="modal" >Debit</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
