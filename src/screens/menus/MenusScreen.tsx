import { useEffect, useState } from 'react'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { getMenus } from '../../services/api'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MenusScreen() {
const [menu , setMenu] = useState([])
	useEffect(() => {
	   getMenus().then((data) => setMenu(data));
	}, [])
  return (
	<ScrollView contentContainerStyle={{paddingHorizontal: 30}}>
		<SafeAreaView>
			{menu && menu.map((menu: any) => (
				<Text key={menu.id}>
					<Text>{menu.name}</Text>
					<Text>{menu.description}</Text>
					<Text>{menu.restaurant_name}</Text>
				</Text>
			))}
		</SafeAreaView>
	</ScrollView>
  )
}