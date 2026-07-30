type TextPreset = 'h1' | 'h2' | 'h3' | 'body-lg' | 'body' | 'body-sm' | 'caption';
const classes: Record<TextPreset, string> = {
  h1: 'type-h1', h2: 'type-h2', h3: 'type-h3',
  'body-lg': 'type-body-lg', body: 'type-body', 'body-sm': 'type-body-sm', caption: 'type-caption',
};

export function Typography({ as: Element = 'p', preset = 'body', className = '', children }: {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  preset?: TextPreset;
  className?: string;
  children: React.ReactNode;
}) {
  return <Element className={`${classes[preset]} ${className}`}>{children}</Element>;
}
