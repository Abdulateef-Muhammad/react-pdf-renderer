import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./components/pdf-file";

function App() {
  return (
    <>
      {/* <PDFDownloadLink document={<PDFFile />}>download</PDFDownloadLink> */}
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <PDFFile />
      </PDFViewer>
    </>
  );
}

export default App;
