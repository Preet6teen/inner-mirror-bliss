export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          price: number;
          duration_minutes: number;
          delivery_modes: string[];
          short_description: string;
          full_description: string;
          benefits: string[];
          image_url: string | null;
          is_active: boolean;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          price: number;
          duration_minutes: number;
          delivery_modes?: string[];
          short_description: string;
          full_description: string;
          benefits?: string[];
          image_url?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          category?: string;
          price?: number;
          duration_minutes?: number;
          delivery_modes?: string[];
          short_description?: string;
          full_description?: string;
          benefits?: string[];
          image_url?: string | null;
          is_active?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          booking_reference: string;
          service_id: string;
          client_name: string;
          client_email: string;
          client_phone: string;
          appointment_date: string;
          appointment_time: string;
          mode: string;
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          client_notes: string | null;
          admin_notes: string | null;
          price_at_booking: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          booking_reference: string;
          service_id: string;
          client_name: string;
          client_email: string;
          client_phone: string;
          appointment_date: string;
          appointment_time: string;
          mode?: string;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          client_notes?: string | null;
          admin_notes?: string | null;
          price_at_booking: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          booking_reference?: string;
          service_id?: string;
          client_name?: string;
          client_email?: string;
          client_phone?: string;
          appointment_date?: string;
          appointment_time?: string;
          mode?: string;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          client_notes?: string | null;
          admin_notes?: string | null;
          price_at_booking?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          status: 'new' | 'in_progress' | 'resolved';
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
          status?: 'new' | 'in_progress' | 'resolved';
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          subject?: string;
          message?: string;
          status?: 'new' | 'in_progress' | 'resolved';
          created_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          tags: string[];
          cover_image_url: string | null;
          author_name: string;
          reading_time_minutes: number;
          status: 'draft' | 'published' | 'archived';
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          tags?: string[];
          cover_image_url?: string | null;
          author_name?: string;
          reading_time_minutes?: number;
          status?: 'draft' | 'published' | 'archived';
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          category?: string;
          tags?: string[];
          cover_image_url?: string | null;
          author_name?: string;
          reading_time_minutes?: number;
          status?: 'draft' | 'published' | 'archived';
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
