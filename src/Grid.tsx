type GridProps = {
  children: React.ReactNode
}

export const Grid = ({children}:GridProps) => 
<div style={styles.grid}>
  {children}
</div>

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
} as const;