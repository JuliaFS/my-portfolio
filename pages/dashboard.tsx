"use client";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface SessionData {
  clicks?: { icon: string | null; link?: string | null; country?: string; city?: string }[];
  country?: string;
  city?: string;
}

const DashboardPage = () => {
  const [totalVisits, setTotalVisits] = useState(0);
  const [dailyVisits, setDailyVisits] = useState<Record<string, number>>({});
  const [iconCounts, setIconCounts] = useState<Record<string, number>>({});
  const [linkCounts, setLinkCounts] = useState<Record<string, number>>({});
  const [countryCounts, setCountryCounts] = useState<Record<string, number>>({});
  const [cityCounts, setCityCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  // Total visits
  useEffect(() => {
    const fetchTotal = async () => {
      const totalSnap = await getDoc(doc(db, "analytics", "total_visits"));
      if (totalSnap.exists()) setTotalVisits(totalSnap.data().count || 0);
    };
    fetchTotal();
  }, []);

  // Daily visits
  useEffect(() => {
    const dailyCol = collection(db, "daily_visits");
    const unsubscribe = onSnapshot(dailyCol, (snapshot) => {
      const map: Record<string, number> = {};
      snapshot.docs.forEach((doc) => {
        map[doc.id] = doc.data().count || 0;
      });
      setDailyVisits(map);
    });
    return () => unsubscribe();
  }, []);

  // Sessions (icons, links, country, city)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "user_sessions"), (snapshot) => {
      const iconMap: Record<string, number> = {};
      const linkMap: Record<string, number> = {};
      const countryMap: Record<string, number> = {};
      const cityMap: Record<string, number> = {};

      snapshot.docs.forEach((doc) => {
        const data = doc.data() as SessionData;
        const country = data.country || "Unknown";
        const city = data.city || "Unknown";

        countryMap[country] = (countryMap[country] || 0) + 1;
        cityMap[`${country} - ${city}`] = (cityMap[`${country} - ${city}`] || 0) + 1;

        data.clicks?.forEach((click) => {
          const icon = click.icon || "all";
          const link = click.link || "unknown";

          iconMap[icon] = (iconMap[icon] || 0) + 1;
          linkMap[link] = (linkMap[link] || 0) + 1;
        });
      });

      setIconCounts(iconMap);
      setLinkCounts(linkMap);
      setCountryCounts(countryMap);
      setCityCounts(cityMap);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-700">
        Loading...
      </div>
    );

  const makeChartData = (labels: string[], values: number[], label: string) => ({
    labels,
    datasets: [
      {
        label,
        data: values,
        backgroundColor: "rgba(147, 51, 234, 0.6)",
        borderColor: "rgba(147, 51, 234, 1)",
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
  };

  const renderChart = (
    title: string,
    labels: string[],
    values: number[],
    type: "bar" | "pie"
  ) => (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 mb-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>
      {labels.length > 0 ? (
        type === "bar" ? (
          <Bar data={makeChartData(labels, values, title)} options={chartOptions} />
        ) : (
          <Pie data={makeChartData(labels, values, title)} />
        )
      ) : (
        <p className="text-gray-600 text-center">No data yet</p>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold mb-6 text-purple-700">
        📊 Portfolio Analytics Dashboard
      </h1>

      {/* Total Visits */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">🌍 Total Site Visits</h2>
        <p className="text-4xl font-bold text-purple-700 mt-2">{totalVisits}</p>
      </div>

      {/* Charts */}
      {renderChart("Daily Visits", Object.keys(dailyVisits), Object.values(dailyVisits), "bar")}
      {renderChart("Most Clicked Icons", Object.keys(iconCounts), Object.values(iconCounts), "bar")}
      {renderChart("Most Clicked Links", Object.keys(linkCounts), Object.values(linkCounts), "bar")}
      {renderChart("Visitors by Country", Object.keys(countryCounts), Object.values(countryCounts), "pie")}
      {renderChart("Top Cities (Country - City)", Object.keys(cityCounts), Object.values(cityCounts), "bar")}
    </div>
  );
};

export default DashboardPage;


// "use client";
// import { useEffect, useState } from "react";
// import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebase";
// import { Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// interface SessionData {
//   clicks?: { icon: string | null; country?: string; city?: string }[];
//   country?: string;
//   city?: string;
// }

// const DashboardPage = () => {
//   const [totalVisits, setTotalVisits] = useState(0);
//   const [dailyVisits, setDailyVisits] = useState<Record<string, number>>({});
//   const [iconCounts, setIconCounts] = useState<Record<string, number>>({});
//   const [countryCounts, setCountryCounts] = useState<Record<string, number>>({});
//   const [cityCounts, setCityCounts] = useState<Record<string, number>>({});
//   const [loading, setLoading] = useState(true);

//   // Total visits
//   useEffect(() => {
//     const fetchTotal = async () => {
//       const totalSnap = await getDoc(doc(db, "analytics", "total_visits"));
//       if (totalSnap.exists()) setTotalVisits(totalSnap.data().count || 0);
//     };
//     fetchTotal();
//   }, []);

//   // Daily visits
//   useEffect(() => {
//     const dailyCol = collection(db, "daily_visits"); // Path: /daily_visits
//     const unsubscribe = onSnapshot(dailyCol, (snapshot) => {
//       const map: Record<string, number> = {};
//       snapshot.docs.forEach((doc) => {
//         map[doc.id] = doc.data().count || 0;
//       });
//       setDailyVisits(map);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Sessions
//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "user_sessions"), (snapshot) => {
//       const iconMap: Record<string, number> = {};
//       const countryMap: Record<string, number> = {};
//       const cityMap: Record<string, number> = {};

//       snapshot.docs.forEach((doc) => {
//         const data = doc.data() as SessionData;
//         const country = data.country || "Unknown";
//         const city = data.city || "Unknown";

//         countryMap[country] = (countryMap[country] || 0) + 1;
//         cityMap[`${country} - ${city}`] = (cityMap[`${country} - ${city}`] || 0) + 1;

//         data.clicks?.forEach((click) => {
//           const icon = click.icon || "all";
//           iconMap[icon] = (iconMap[icon] || 0) + 1;
//         });
//       });

//       setIconCounts(iconMap);
//       setCountryCounts(countryMap);
//       setCityCounts(cityMap);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (loading)
//     return <div className="flex justify-center items-center h-screen text-xl text-gray-700">Loading...</div>;

//   const makeChartData = (labels: string[], values: number[], label: string) => ({
//     labels,
//     datasets: [{ label, data: values, backgroundColor: "rgba(147, 51, 234, 0.6)", borderColor: "rgba(147, 51, 234, 1)", borderWidth: 1 }],
//   });

//   const chartOptions = { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } };

//   const renderChart = (title: string, labels: string[], values: number[], type: "bar" | "pie") => (
//     <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 mb-10">
//       <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>
//       {labels.length > 0 ? (type === "bar" ? <Bar data={makeChartData(labels, values, title)} options={chartOptions} /> : <Pie data={makeChartData(labels, values, title)} />) : <p className="text-gray-600 text-center">No data yet</p>}
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-semibold mb-6 text-purple-700">📊 Portfolio Analytics Dashboard</h1>
//       <div className="bg-white shadow-md rounded-xl p-6 mb-10 text-center">
//         <h2 className="text-2xl font-semibold text-gray-800">🌍 Total Site Visits</h2>
//         <p className="text-4xl font-bold text-purple-700 mt-2">{totalVisits}</p>
//       </div>
//       {renderChart("Daily Visits", Object.keys(dailyVisits), Object.values(dailyVisits), "bar")}
//       {renderChart("Most Clicked Icons", Object.keys(iconCounts), Object.values(iconCounts), "bar")}
//       {renderChart("Visitors by Country", Object.keys(countryCounts), Object.values(countryCounts), "pie")}
//       {renderChart("Top Cities (Country - City)", Object.keys(cityCounts), Object.values(cityCounts), "bar")}
//     </div>
//   );
// };

// export default DashboardPage;



