// LineChart.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { Svg, Line, Path } from "react-native-svg";
import { Colors } from "react-native/Libraries/NewAppScreen";

type LineChartProps = {
  data: number[];
  width: number;
  height: number;
};

const LineChart: React.FC<LineChartProps> = ({ data, width, height }) => {
  const chartWidth = width - 32;
  const chartHeight = height - 32;
  const xPadding = 16;
  const yPadding = 16;
  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const yRange = maxValue - minValue;
  const xStep = chartWidth / (data.length - 1);

  const xScale = (index: number) => xPadding + index * xStep;
  const yScale = (value: number) =>
    yPadding + (maxValue - value) * (chartHeight / yRange);

  const pathData = data
    .map((value, index) => `${xScale(index)},${yScale(value)}`)
    .join(" ");

  return (
    <Svg width={width} height={height}>
      <Line
        x1={xPadding}
        y1={chartHeight + yPadding}
        x2={width - xPadding}
        y2={chartHeight + yPadding}
        stroke="#ccc"
        strokeWidth="1"
      />
      <Line
        x1={xPadding}
        y1={yPadding}
        x2={xPadding}
        y2={chartHeight + yPadding}
        stroke="#ccc"
        strokeWidth="1"
      />
      <Path d={`M${pathData}`} fill="none" stroke="#007bff" strokeWidth="2" />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.black,
    marginTop: 32,
  },

  // Add styles for the rest of your UI components here.
});

export default LineChart;
