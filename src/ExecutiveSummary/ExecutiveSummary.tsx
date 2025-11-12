const ExecutiveSummary = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Executive Summary</h1>
      <ul className="list-disc list-inside space-y-2 text-sm">
        The highest engaged group with{' '}
        <span className="font-bold text-primary text-lg">45% (90 users)</span>{' '}
        significantly outweighing the{' '}
        <span className="font-bold text-primary text-lg">37% (74 users) </span> moderately
        active group. The Least Active segment at{' '}
        <span className="font-bold text-primary text-lg">18% (36 users)</span>{' '}
        is the primary focus area.
        <br />
        <br />
        <span className="font-bold text-black text-lg">Action:</span> Target
        these 36 users immediately with a re-engagement campaign centered around{' '}
        <span className="font-bold text-primary text-lg">'Topic 1'</span>, as
        the top users' focus on this topic confirms its high value.
      </ul>
    </div>
  );
};

export default ExecutiveSummary;
