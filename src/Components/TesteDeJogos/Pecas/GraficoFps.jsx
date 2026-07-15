import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from "recharts";

function GraficoFps({ resultadoFps }) {
  const dadosGrafico = [
    {
      qualidade: "Gráficos Baixos",
      fps: resultadoFps?.baixa ?? 0,
      cor: "#22c55e"
    },
    {
      qualidade: "Gráficos Médios",
      fps: resultadoFps?.media ?? 0,
      cor: "#facc15",
    },
    {
      qualidade: "Gráficos Altos",
      fps: resultadoFps?.alta ?? 0,
      cor: "#ef4444",
    },
  ];
  console.log(resultadoFps);

  return (
    <div className="w-full max-w-4xl h-100 mt-20">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dadosGrafico} margin={{
          top: 30,
          right: 20,
          left: 20,
          bottom: 10,
        }}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="qualidade" />

          <YAxis />

          <Tooltip />


          <Bar
            dataKey="fps"
            label={({ x, y, width, value }) => (
              <text
                x={x + width / 2}
                y={y - 10}
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
                fontSize={14}
              >
                FPS {value}
              </text>
            )} isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-out">
            {dadosGrafico.map((item, index) => (
              <Cell
                key={index}
                fill={item.cor}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoFps;
