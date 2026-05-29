/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: 'Shield' | 'Heart' | 'Building';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  caseType: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageSeed: string; // for unsplash/picsum curated links
  author: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  coverage: string;
  details: string;
}
