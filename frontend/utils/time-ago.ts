export function timeAgo(date: string): string {
  const now = new Date();
  const timeDiff_Mili = now.getTime() - new Date(date).getTime();

  const timeDiff_Sec = Math.floor(timeDiff_Mili / 1000);
  const timeDiff_Min = Math.floor(timeDiff_Sec / 60);
  const timeDiff_Hr = Math.floor(timeDiff_Min / 60);
  const timeDiff_Day = Math.floor(timeDiff_Hr / 24);

  if (timeDiff_Sec < 60) return timeDiff_Sec + " s ago";
  else if (timeDiff_Min < 60) return timeDiff_Min + " min ago";
  else if (timeDiff_Hr < 24) return timeDiff_Hr + " hr ago";
  else if (timeDiff_Day === 1) return "Yesterday";
  else return timeDiff_Day + " days ago";
}
