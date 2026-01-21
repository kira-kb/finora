import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { XCircle } from "lucide-react-native";

export default function PayTransferModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [amount, setAmount] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="justify-center flex-1 bg-black/40">
        <View className="p-6 mx-4 bg-white rounded-2xl">
          <Text className="text-2xl font-bold text-primary">
            Pay / Transfer
          </Text>

          <TextInput
            placeholder="Amount (ETB)"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            className="px-4 py-4 mt-4 text-xl font-bold text-center border border-gray-300 rounded-xl"
          />

          <TextInput
            placeholder="Phone number or account"
            value={destination}
            onChangeText={setDestination}
            className="px-4 py-3 mt-4 border border-gray-300 rounded-xl"
          />

          <View className="flex-row gap-3 mt-6">
            <TouchableOpacity
              onPress={onClose}
              className="items-center flex-1 py-4 border border-gray-300 rounded-xl"
            >
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center flex-1 py-4 bg-primary rounded-xl">
              <Text className="font-semibold text-white">Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
