import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {
  ColorMappingPrimaryYAxis,
  ColorMappingPrimaryXAxis,
  colorMappingData,
  rangeColorMapping,
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Color Mapping" />
      <div className="w-full">
        <ChartComponent
          id="colorMapping-chart"
          title="USA CLIMATE - WEATHER BY MONTH"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ background: "white" }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
        >
          <Inject services={[Legend, Category, Tooltip, ColumnSeries]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              type="Column"
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
