import React from "react";

function WeeklySummary({ summary }) {
    if (!Array.isArray(summary) || summary.length === 0) {
        return;
    }

    return (
        <tfoot>
            {summary.map((week, index) => (
                <tr key={index}>
                    <td>
                        <strong>Week Summary</strong>
                    </td>
                    <td>
                        <strong>Avg. Pressure:</strong> {week.average_pressure.toFixed(2)} hPa
                    </td>
                    <td>
                        <strong>Avg. Sunshine:</strong> {week.average_sunshine.toFixed(2)} hours
                    </td>
                    <td>
                        <strong>Temp. Range:</strong> {week.temperature_min}°C /{" "}
                        {week.temperature_max}°C
                    </td>
                    <td>
                        <strong>Summary:</strong> {week.summary}
                    </td>
                </tr>
            ))}
        </tfoot>
    );
}

export default WeeklySummary;