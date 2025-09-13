export default function PaperCard({ paper }) {
  const previewSrc = `/api/drive/${paper.fileId}`;
  const isImage = paper.mimeType && paper.mimeType.startsWith('image');

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{paper.title}</h3>
          <p className="text-sm text-gray-500">{paper.branch.toUpperCase()} • Year {paper.academicYear} • {paper.examYear}</p>
        </div>
      </div>

      <div className="mt-3">
        {isImage ? (
          <img src={previewSrc} alt={paper.title} className="w-full h-60 object-contain rounded" />
        ) : (
          <iframe src={previewSrc} className="w-full h-64 rounded border" title={paper.title} />
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <a href={`/api/drive/${paper.fileId}?download=1`} className="px-3 py-2 rounded bg-indigo-600 text-white">Download</a>
      </div>
    </div>
  );
}
