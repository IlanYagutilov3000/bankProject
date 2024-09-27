import { FunctionComponent } from "react";

interface ExpensesProps {

}

interface Expenses {
    description: string;
    cost: number;
    month: string;
}

const Expenses: FunctionComponent<ExpensesProps> = () => {
    let expensesArray: Expenses[] = [
        { description: "Supermarket", cost: 300, month: "December" },
        { description: "Clothing", cost: 250, month: "December" },
        { description: "Electricity", cost: 1000, month: "December" },
        { description: "McDonalds", cost: 235, month: "December" },
        { description: "Taxes", cost: 720, month: "December" },
        { description: "Supermarket", cost: 450, month: "November" },
        { description: "Pizza Hut", cost: 130, month: "November" },
        { description: "Supermarket", cost: 220, month: "October" }
    ];
    /* let expensesArray: Expenses[] = []; */
    return (<>
        {expensesArray.length ? (<table className="table text-center">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Month</th>
                </tr>
            </thead>
            <tbody>
                {expensesArray.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.description}</td>
                        <td>{expense.cost}</td>
                        <td>{expense.month}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        ) : (
            <p>No Expenses Were Found</p>
        )}
    </>);
}

export default Expenses;