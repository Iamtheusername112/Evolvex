import { createClient } from '@/lib/supabase/server'

export async function getUserProfile(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('clerk_id', userId)
    .single()
  
  if (error) {
    console.error('Error fetching user profile:', error)
    return null
  }
  
  return data
}

export async function getUserWallets(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('wallets')
    .select('*')
    .eq('user_id', userId)
  
  if (error) {
    console.error('Error fetching wallets:', error)
    return []
  }
  
  return data || []
}

export async function getUserOrders(userId: string, limit = 50) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('orders')
    .select('*, trading_pairs(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)
  
  if (error) {
    console.error('Error fetching orders:', error)
    return []
  }
  
  return data || []
}

export async function getUserTransactions(userId: string, limit = 50) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)
  
  if (error) {
    console.error('Error fetching transactions:', error)
    return []
  }
  
  return data || []
}

export async function getTradingPairs(category?: 'forex' | 'crypto') {
  const supabase = await createClient()
  let query = supabase
    .from('trading_pairs')
    .select('*')
    .eq('is_active', true)
  
  if (category) {
    query = query.eq('category', category)
  }
  
  const { data, error } = await query.order('symbol')
  
  if (error) {
    console.error('Error fetching trading pairs:', error)
    return []
  }
  
  return data || []
}

export async function getMarketData(pairId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('market_data')
    .select('*')
    .eq('pair_id', pairId)
    .order('timestamp', { ascending: false })
    .limit(1)
    .single()
  
  if (error) {
    console.error('Error fetching market data:', error)
    return null
  }
  
  return data
}

