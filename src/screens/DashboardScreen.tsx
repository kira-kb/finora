import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, Plus } from "lucide-react-native";
import PayTransferModal from "../../components/PayTransferModal";

export default function DashboardScreen() {
  const [showPay, setShowPay] = useState(false);

  const bankAccounts = [
    { id: "1", name: "Dashen Bank", balance: 5000 },
    { id: "2", name: "Bank of Abyssinia", balance: 2500 },
    { id: "3", name: "Wegagen Bank", balance: 1200 },
  ];

  const totalBalance = bankAccounts.reduce((s, a) => s + a.balance, 0);

  return (
    <ScrollView className="flex-1 px-4 pt-4 bg-background">
      {/* Total Balance */}
      <View className="p-5 shadow-xl bg-primary rounded-2xl">
        <Text className="text-sm text-white/70">Total Balance</Text>
        <Text className="mt-2 text-4xl font-bold text-white">
          {totalBalance.toLocaleString()} ETB
        </Text>
        <Text className="mt-1 text-sm text-emerald-200">
          Across {bankAccounts.length} accounts
        </Text>

        <View className="flex-row gap-3 mt-6">
          <TouchableOpacity
            onPress={() => setShowPay(true)}
            className="flex-row items-center justify-center flex-1 py-3 bg-white rounded-xl"
          >
            <ArrowUpRight size={18} color="#195135" />
            <Text className="ml-2 font-semibold text-primary">
              Pay / Transfer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center flex-1 py-3 border border-white/30 rounded-xl">
            <TrendingUp size={18} color="#fff" />
            <Text className="ml-2 font-semibold text-white">Refresh</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Actions */}
      <View className="flex-row gap-4 mt-6">
        <TouchableOpacity className="items-center flex-1 p-5 bg-white shadow rounded-xl">
          <View className="items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
            <Plus size={22} color="#195135" />
          </View>
          <Text className="mt-3 font-semibold text-primary">Add Bank</Text>
          <Text className="text-xs text-gray-500">Link a new account</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center flex-1 p-5 bg-white shadow rounded-xl">
          <View className="items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
            <TrendingUp size={22} color="#2563eb" />
          </View>
          <Text className="mt-3 font-semibold text-blue-600">History</Text>
          <Text className="text-xs text-gray-500">View transactions</Text>
        </TouchableOpacity>
      </View>

      <PayTransferModal visible={showPay} onClose={() => setShowPay(false)} />
    </ScrollView>
  );
}
