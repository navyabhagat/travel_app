import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define Itinerary Item Type
interface ItineraryItem {
  id: string;
  title: string;
  date: string;
}

// Define Itinerary Context Type
interface ItineraryContextType {
  itinerary: ItineraryItem[];
  addItem: (item: ItineraryItem) => void;
  removeItem: (id: string) => void;
}

// Create Context
export const ItineraryContext = createContext<ItineraryContextType | undefined>(undefined);

export const ItineraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);

  useEffect(() => {
    const loadItinerary = async () => {
      try {
        const storedItinerary = await AsyncStorage.getItem('itinerary');
        if (storedItinerary) setItinerary(JSON.parse(storedItinerary));
      } catch (error) {
        console.error('Error loading itinerary:', error);
      }
    };
    loadItinerary();
  }, []);

  const addItem = async (item: ItineraryItem) => {
    const updatedItinerary = [...itinerary, item];
    setItinerary(updatedItinerary);
    await AsyncStorage.setItem('itinerary', JSON.stringify(updatedItinerary));
  };

  const removeItem = async (id: string) => {
    const updatedItinerary = itinerary.filter((item) => item.id !== id);
    setItinerary(updatedItinerary);
    await AsyncStorage.setItem('itinerary', JSON.stringify(updatedItinerary));
  };

  return (
    <ItineraryContext.Provider value={{ itinerary, addItem, removeItem }}>
      {children}
    </ItineraryContext.Provider>
  );
};
