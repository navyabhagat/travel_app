import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface HotelCardProps {
  name: string;
  price: number;
  rating: number;
  amenities: string[];
  imageUrl: string;
  onAddToPlan: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ name, price, rating, amenities, imageUrl, onAddToPlan }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price} per night</Text>
        <Text style={styles.rating}>{rating} ★</Text>
        <Text style={styles.amenities}>{amenities.join(', ')}</Text>
        <TouchableOpacity style={styles.button} onPress={onAddToPlan}>
          <Text style={styles.buttonText}>Add to Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flexDirection: 'row',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
  },
  amenities: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HotelCard;
