import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = ({ id, title, data, legendVisibility, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      title={title}
      titleStyle={{
        size: "24px",
        fontWeight: "600",
      }}
      tooltip={{
        enable: true,
        // visible: legendVisibility,
        // background: "white",
      }}
      legendSettings={{
        position: "Top",
        background: "white",
        visible: legendVisibility,
        textStyle: { size: "16px" },
      }}
      height={height}
      background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
      className="text-2xl"
    >
      <Inject
        services={[
          PieSeries,
          AccumulationDataLabel,
          AccumulationLegend,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          type="Pie"
          dataSource={data}
          innerRadius="40%"
          xName="x"
          yName="y"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={data.length - 1}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
