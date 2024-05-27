import React from 'react'
import './leader.css'
function Leaderboard() {

    const data = [
        {
            rank: 1,
            name: 'Selling with re entr',
            calmarRatio: 3.96,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 381845,
            avgDailyProfit: 319.54,
            winPercentage: 0.65,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1708075862702_684849&h=t',
            actionText: 'View'
        },
        {
            rank: 2,
            name: 'strategy_name',
            calmarRatio: 3.62,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 268872.5,
            avgDailyProfit: 216.31,
            winPercentage: 0.64,
            price: 500,
            actionLink: '#',
            actionText: 'Buy'
        },
        {
            rank: 3,
            name: 'Based on premium and',
            calmarRatio: 3.42,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 255425,
            avgDailyProfit: 208.51,
            winPercentage: 0.64,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1708020432643_224339&h=t',
            actionText: 'View'
        },
        {
            rank: 4,
            name: 'strategy_name',
            calmarRatio: 3.22,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 370845,
            avgDailyProfit: 303.47,
            winPercentage: 0.65,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1709565300515_86849&h=t',
            actionText: 'View'
        },
        {
            rank: 5,
            name: 'strategy_name',
            calmarRatio: 3.22,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 370845,
            avgDailyProfit: 303.47,
            winPercentage: 0.65,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1709565616248_816433&h=t',
            actionText: 'View'
        },
        {
            rank: 6,
            name: 'Based on premium wit',
            calmarRatio: 3.01,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 135980,
            avgDailyProfit: 185.77,
            winPercentage: 0.49,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1708021661991_446710&h=t',
            actionText: 'View'
        },
        {
            rank: 7,
            name: 'strategy_name',
            calmarRatio: 2.76,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 267867.5,
            avgDailyProfit: 218.49,
            winPercentage: 0.6,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1710748346591_466565&h=t',
            actionText: 'View'
        },
        {
            rank: 8,
            name: 'Wait and trade_Save',
            calmarRatio: 2.62,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 178252.5,
            avgDailyProfit: 161.9,
            winPercentage: 0.63,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1708020180248_819078&h=t',
            actionText: 'View'
        },
        {
            rank: 9,
            name: 'iron condor',
            calmarRatio: 2.44,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 176420,
            avgDailyProfit: 137.51,
            winPercentage: 0.65,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1716291315324_516695&h=t',
            actionText: 'View'
        },
        {
            rank: 10,
            name: 'strategy_name',
            calmarRatio: 2.04,
            svgPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
            overallProfit: 244555,
            avgDailyProfit: 198.66,
            winPercentage: 0.62,
            price: '-',
            actionLink: 'https://unfluke.in/BasicBackTest?tab=strategy-view&filename=0_1711607113017_566295&h=t',
            actionText: 'View'
        }
    ];

  return (
    <div className='main'>
    <h1 class="leader" >LeaderBoards</h1>
   <div className='empty'></div>
<div>
 

  <div className='main1'>
  <div className='main2' style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#333', color: '#fff' }}>
                    <tr>
                        <th style={thStyle}>Rank</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Calmar Ratio</th>
                        <th style={thStyle}>Overall Profit</th>
                        <th style={thStyle}>Avg. Daily Profit</th>
                        <th style={thStyle}>Win %(Day)</th>
                        <th style={thStyle}>Price (Rs)</th>
                        <th style={thStyle}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
                            <th scope="row" style={tdStyle}>{row.rank}</th>
                            <td style={tdStyle}>{row.name}</td>
                            <td style={tdStyle}>
                                <span>
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="green"
                                        style={{ width: '16px', height: '16px', marginRight: '5px' }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d={row.svgPath}
                                        ></path>
                                    </svg>
                                    {row.calmarRatio}
                                </span>
                            </td>
                            <td style={tdStyle}>{row.overallProfit}</td>
                            <td style={tdStyle}>{row.avgDailyProfit}</td>
                            <td style={tdStyle}>{row.winPercentage}</td>
                            <td style={tdStyle}>{row.price}</td>
                            <td style={tdStyle}>
                                <button style={buttonStyle}>
                                    <a
                                        href={row.actionLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        style={{ textDecoration: 'none', color: '#fff' }}
                                    >
                                        {row.actionText}
                                    </a>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  </div>
</div>
    </div>
  )
}


const thStyle = {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd'
};

const tdStyle = {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
};

const evenRowStyle = {
    backgroundColor: '#f9f9f9'
};

const oddRowStyle = {
    backgroundColor: '#fff'
};

const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default Leaderboard
