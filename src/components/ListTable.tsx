import { ToDoCtx } from "../provider/ToDoProvider";

function ListTable() {
    const provider = ToDoCtx();

    // const createTime = provider?.state;
    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };

    return (
        <table>
            {
                provider?.state && provider.state.length !== 0 ? <>
                    {/* <thead>
                        <tr>
                            <th></th>
                            <th>Created at</th>
                            <th>To-Do</th>
                            <th>Status</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {
                            provider.state.map(data => <tr key={data.id}>
                                <td>{data.isCompleted ? '👍' : '✔️'}</td>
                                <td>
                                    <p>{new Intl.DateTimeFormat('en-US', timeOptions).format(new Date(data.data))}</p>
                                    <p>{new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(data.data))}</p>
                                </td>
                                <td>{data.text}</td>
                                <td>{data.isCompleted ? 'done' : 'pending'}</td>
                            </tr>)
                        }
                    </tbody>
                </> : <></>
            }
        </table>
    )
}

export default ListTable;

{/* <tr>
    <td>✔️</td>
    <td>10:30pm</td>
    <td>hello</td>
    <td>pending</td>
</tr>
<tr>
    <td>👍</td>
    <td className="line-through">10:30pm</td>
    <td className="line-through">hello</td>
    <td>done</td>
</tr> */}