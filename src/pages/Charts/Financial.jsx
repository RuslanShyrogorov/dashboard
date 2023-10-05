import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  HiloSeries,
  Inject,
  DateTime,
  Tooltip,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Financial" />
      <div className="w-full">
        <ChartComponent
          title="AAPLE Historical"
          style={{ textAlign: "center" }}
          legendSettings={{ visible: true }}
          primaryXAxis={{
            ...FinancialPrimaryXAxis,
            labelFormat: "yMMM",
            title: "Month",
          }}
          primaryYAxis={{ ...FinancialPrimaryYAxis, title: "Price" }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              HiloSeries,
              DateTime,
              Tooltip,
              Zoom,
              Logarithmic,
              Crosshair,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              type="Hilo"
              name="Apple Inc"
              dataSource={financialChartData}
              xName="x"
              yName="low"
              high="high"
              low="low"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
