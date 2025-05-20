import { useState } from 'react'
import { ArrowUp, Check, Upload as UploadIcon } from 'lucide-react'

const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  };
  
  const handleFiles = (fileList) => {
    const newFiles = []
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]
      // Check if file is PDF, JPG, or PNG
      if (file.type === "application/pdf" || file.type === "image/jpeg" || file.type === "image/png") {
        // Check if file size is under 20MB
        if (file.size <= 20 * 1024 * 1024) {
          newFiles.push(file);
        } else {
          toast({
            title: "File too large",
            description: `${file.name} exceeds 20MB limit.`,
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "Unsupported file format",
          description: `${file.name} is not a PDF, JPG, or PNG.`,
          variant: "destructive"
        });
      }
    }
    
    if (newFiles.length > 0) {
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  
  const handleSubmit = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload.",
        variant: "destructive"
      });
      return;
    }
    
    setUploading(true);
    
    // Simulating upload with timeout
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
      toast({
        title: "Upload successful",
        description: "Your circulars have been uploaded and processed.",
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Upload Weekly Circulars</h1>
            <p className="text-lg text-green mb-8">
              Upload your local supermarket circulars to extract deals automatically and make them searchable. Our system will process your files and extract all the best deals.
            </p>
            
            <div className="mb-8">
              <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6 bg-gray-50 border-b border-gray-100">
                  <h3 className="bg-white font-semibold leading-none tracking-tight text-lg">Upload Circular</h3>
                </div>
                <div className="bg-white p-6 pt-0">
                  <div 
                    className={`bg-white border-2 border-dashed rounded-lg p-10 text-center ${dragActive ? "border-primary bg-primary/5" : "border-gray-200"}`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <ArrowUp className="transparent-bg h-8 w-8 text-primary" />
                    </div>
                    <p className="bg-white text-gray-500 mb-4">
                      Drag and drop files here, or click to select files
                    </p>
                    <p className="bg-white text-xs text-gray-400 mb-6">
                      Supports: JPG, PNG, PDF (max 20MB)
                    </p>
                    <button 
                      onClick={() => document.getElementById('file-upload')?.click()}
                      disabled={uploading} className="transition-colors px-6 bg-secondary rounded-md h-12 font-medium text-lg text-secondary-foreground"
                    >
                      Select Files
                    </button>
                    <input 
                      id="file-upload" 
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="hidden"
                      onChange={handleFileChange}
                      disabled={uploading}
                    />
                  </div>
                  
                  {files.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Selected Files</h3>
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <UploadIcon className="h-5 w-5 text-gray-400 mr-3" />
                              <span className="text-sm font-medium truncate max-w-xs">{file.name}</span>
                              <span className="text-xs text-gray-500 ml-2">
                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </div>
                            <button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              disabled={uploading}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                    {uploadSuccess && (
                      <div role="alert" className="bg-background text-foreground mt-6 bg-green-50 border-green-200">
                        <Check className="h-4 w-4 text-green-500" />
                        <div className="text-sm [&_p]:leading-relaxed text-green-700">
                          Your circulars have been successfully uploaded and processed!
                        </div>
                      </div>
                    )}
                </div>
                <div className="bg-gray-50 border-t border-gray-100 flex justify-center">
                  <button 
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" 
                    onClick={handleSubmit}
                    disabled={files.length === 0 || uploading}
                  >
                    {uploading ? "Uploading..." : "Upload Circulars"}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="bg-white search-result-text text-2xl font-bold mb-4">How It Works</h2>
              <ol className="bg-white space-y-4 list-decimal list-inside">
                <li className="bg-white ml-4">
                  <span className="bg-white search-result-text font-medium">Upload your circular</span>
                  <p className="bg-white text-gray-600 ml-6 mt-1">Take a photo or scan of your local supermarket circular and upload it.</p>
                </li>
                <li className="bg-white ml-4">
                  <span className="bg-white search-result-text font-medium">Automatic processing</span>
                  <p className="bg-white text-gray-600 ml-6 mt-1">Our system automatically extracts all deals using advanced image recognition.</p>
                </li>
                <li className="bg-white ml-4">
                  <span className="bg-white search-result-text font-medium">Search and compare</span>
                  <p className="bg-white text-gray-600 ml-6 mt-1">All deals become instantly searchable and can be compared across stores.</p>
                </li>
                <li className="bg-white ml-4">
                  <span className="bg-white search-result-text font-medium">Save money</span>
                  <p className="bg-white text-gray-600 ml-6 mt-1">Find the best deals on your grocery shopping with minimal effort.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload