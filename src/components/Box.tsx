
import { BaseComponent } from '@/theme/BaseComponent';
import { StyleSheet } from '@/theme/StyleSheet';

interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}