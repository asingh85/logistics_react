import React from "react";

const Pagination = (props) => {
    const handlePagination = (current) => {
        props.pagination(current);
    };

    return (
        <div>
            <nav aria-label="Table navigation">
                <ul className="pagination inline-block pl-0 my-[20px]">
                    <li className="page-item inline">
                        <button
                            className={`page-link text-[#ff0014] ${props.current === 1 ? "disabled" : props.current > 1 ? "" : ""
                                }`}
                            onClick={() => handlePagination(props.current - 1)}
                        >
                            Previous
                        </button>
                    </li>
                    {props.total < 7 ? (
                        <>
                            {Array.apply(0, Array(props.total)).map((arr, i) => (
                                <>
                                    <li
                                        key={i}
                                        className={`page-item inline ${props.current === i + 1 ? "active" : ""
                                            }`}
                                    >
                                        <button
                                            className="page-link text-[#ff0014]"

                                            onClick={() => handlePagination(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                </>
                            ))}
                        </>
                    ) : props.current % 5 >= 0 &&
                        props.current > 4 &&
                        props.current + 2 < props.total ? (
                        <>
                            <li className="page-item inline">
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(1)}
                                >
                                    1
                                </button>
                            </li>
                            <li className="page-item inline">
                                <button className="page-link text-[#ff0014] disabled" >
                                    ...
                                </button>
                            </li>
                            <li className="page-item inline">
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.current - 1)}
                                >
                                    {props.current - 1}
                                </button>
                            </li>
                            <li className="page-item inline active">
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.current)}
                                >
                                    {props.current}
                                </button>
                            </li>
                            <li className="page-item inline">
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.current + 1)}
                                >
                                    {props.current + 1}
                                </button>
                            </li>
                            <li className="page-item inline">
                                <button className="page-link text-[#ff0014] disabled" >
                                    ...
                                </button>
                            </li>
                            <li className="page-item inline">
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.total)}
                                >
                                    {props.total}
                                </button>
                            </li>
                        </>
                    ) : props.current % 5 >= 0 &&
                        props.current > 4 &&
                        props.current + 2 >= props.total ? (
                        <>
                            <li className="page-item inline">
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(1)}
                                >
                                    1
                                </button>
                            </li>
                            <li className="page-item inline">
                                <button className="page-link text-[#ff0014] disabled" >
                                    ...
                                </button>
                            </li>
                            <li
                                className={`page-item inline ${props.current === props.total - 3 ? "active" : ""
                                    }`}
                            >
                                <button
                                    className="page-link text-[#ff0014] bg-red-400"

                                    onClick={() => handlePagination(props.total - 3)}
                                >
                                    {props.total - 3}
                                </button>
                            </li>
                            <li
                                className={`page-item inline ${props.current === props.total - 2 ? "active" : ""
                                    }`}
                            >
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.total - 2)}
                                >
                                    {props.total - 2}
                                </button>
                            </li>
                            <li
                                className={`page-item inline ${props.current === props.total - 1 ? "active" : ""
                                    }`}
                            >
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.total - 1)}
                                >
                                    {props.total - 1}
                                </button>
                            </li>
                            <li
                                className={`page-item inline ${props.current === props.total ? "active" : ""
                                    }`}
                            >
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.total)}
                                >
                                    {props.total}
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            {Array.apply(0, Array(5)).map((arr, i) => (
                                <>
                                    <li
                                        className={`page-item inline ${props.current === i + 1 ? "active" : ""
                                            }`}
                                        key={i}
                                    >
                                        <button
                                            className="page-link text-[#ff0014]"

                                            onClick={() => handlePagination(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                </>
                            ))}
                            <li className=" page-item inline">
                                <button className="page-link text-[#ff0014] disabled" >
                                    ...
                                </button>
                            </li>
                            <li className=" page-item inline">
                                <button
                                    className="page-link text-[#ff0014]"

                                    onClick={() => handlePagination(props.total)}
                                >
                                    {props.total}
                                </button>
                            </li>
                        </>
                    )}
                    <li className="page-item inline">
                        <button
                            className={`page-link text-[#ff0014] ${props.current === props.total
                                ? "disabled"
                                : props.current < props.total
                                    ? ""
                                    : ""
                                }`}

                            onClick={() => handlePagination(props.current + 1)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
