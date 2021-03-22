import React, { PureComponent } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";


const data = [
    { fecha: 'Jan.2020', casos: 0 },
    { fecha: 'Feb.2020', casos: 0 },
    { fecha: 'Mar.2020', casos: 96 },
    { fecha: 'Apr.2020', casos: 300 },
    { fecha: 'May.2020', casos: 1548 },
    { fecha: 'Jun.2020', casos: 4106 },
    { fecha: 'Jul.2020', casos: 9965 },
    { fecha: 'Aug.2020', casos: 8020 },
    { fecha: 'Sep.2020', casos: 5637 },
    { fecha: 'Oct.2020', casos: 10029 },
    { fecha: 'Nov.2020', casos: 8430 },
    { fecha: 'Dec.2020', casos: 16314 },
    { fecha: 'Jan.2021', casos: 9173 },
    { fecha: 'Feb.2021', casos: 3567 },
    { fecha: 'Mar.2021', casos: 3751 },
    { fecha: 'Apr.2021', casos: 0 }
];

class Chart extends PureComponent {

    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        };
    }

    handleResize = (e) => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }


    render() {
        const { windowWidth, windowHeight } = this.state;
        return (
            <AreaChart
                width={windowWidth * 0.9}
                height={windowHeight * 0.22}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <XAxis dataKey="fecha" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="casos" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        );
    }
}

export default Chart;