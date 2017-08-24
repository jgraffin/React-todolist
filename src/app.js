import React from 'react';

export class App extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            buyItems: ['milk', 'bread', 'fruit'] 
        }
    }

    addItem (e){
        e.preventDefault();
        const { buyItems } = this.state;
        const newItem = this.newItem.value;

        this.setState({
            buyItems: [...this.state.buyItems, newItem]
        })

        this.addForm.reset();
    }
    
    render (){
        const { buyItems } = this.state;
         return (
            <div>
                <header>
                    <h2>Shopping List</h2>
                    <form ref={ input => this.addForm = input } className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                            <input ref={ input => this.newItem = input } type="text" placeholder="Bread" className="form-control" id="newItemInput" />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </header>
                <table className="table table-striped"> 
                    <thead> 
                        <tr> 
                            <th>#</th> 
                            <th>Item</th> 
                            <th>Action</th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        { 
                            this.state.buyItems.map( item => {
                                return (
                                    <tr key={item}> 
                                        <th scope="row">1</th> 
                                        <td>{item}</td> 
                                        <td>button</td> 
                                    </tr> 
                                )
                            }) 
                        }
                    </tbody> 
                </table>
            </div>
        )
    }
}
