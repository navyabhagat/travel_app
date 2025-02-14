import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, cuisine, rating, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.cuisine}>{cuisine}</Text>
        <Text style={styles.rating}>{rating} ★</Text>
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
    width: 80,
    height: 80,
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
  cuisine: {
    fontSize: 14,
    color: '#666',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
  },
});

export default RestaurantCard;
