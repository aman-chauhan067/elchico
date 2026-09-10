export type GalleryItem = {
  id: string;
  type: 'image' | 'text' | 'empty';
  src?: string;
  text?: string;
  color?: string; // For text/empty backgrounds
  colSpan: number;
  rowSpan: number;
}

export const gallery: GalleryItem[] = [
  // A large heroic image spanning 2x2
  { 
    id: "1", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop", 
    colSpan: 2, 
    rowSpan: 2 
  },
  // Small items wrapping around
  { 
    id: "2", 
    type: "text", 
    text: "baked with love", 
    color: "var(--color-butter)", 
    colSpan: 1, 
    rowSpan: 1 
  },
  { 
    id: "3", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1519340333755-56e9c1d04079?q=80&w=1000&auto=format&fit=crop", 
    colSpan: 1, 
    rowSpan: 1 
  },
  { 
    id: "4", 
    type: "empty", 
    color: "var(--color-cream)", 
    colSpan: 1, 
    rowSpan: 1 
  },
  { 
    id: "5", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop", 
    colSpan: 1, 
    rowSpan: 1 
  },
  
  // Row 3
  { 
    id: "6", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop", 
    colSpan: 1, 
    rowSpan: 1 
  },
  { 
    id: "7", 
    type: "text", 
    text: "sweetest memories", 
    color: "white", 
    colSpan: 1, 
    rowSpan: 1 
  },
  // Another large image
  { 
    id: "8", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1000&auto=format&fit=crop", 
    colSpan: 1, 
    rowSpan: 1 
  },
  
  // Row 4/5 wrap arounds
  { 
    id: "9", 
    type: "empty", 
    color: "var(--color-vanilla)", 
    colSpan: 1, 
    rowSpan: 1 
  },
  { 
    id: "10", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1000&auto=format&fit=crop", 
    colSpan: 1, 
    rowSpan: 1 
  },
  { 
    id: "11", 
    type: "text", 
    text: "our little family", 
    color: "var(--color-apricot)", 
    colSpan: 1, 
    rowSpan: 1 
  },
  { 
    id: "12", 
    type: "image", 
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop", 
    colSpan: 1, 
    rowSpan: 1 
  },
];
