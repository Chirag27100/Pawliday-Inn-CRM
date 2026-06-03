// ─── UTILS ────────────────────────────────────────────────────────

window.Utils = {
  formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  },

  formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  },

  formatTime(timeStr) {
    const [h, m] = timeStr.split(':');
    const hour = parseInt(h);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${m} ${ampm}`;
  },

  timeToMinutes(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  },

  minutesToTime(mins) {
    const h = Math.floor(mins / 60).toString().padStart(2, '0');
    const m = (mins % 60).toString().padStart(2, '0');
    return `${h}:${m}`;
  },

  getStatusBadge(status) {
    const map = {
      new: { label: 'New', class: 'badge-new' },
      contacted: { label: 'Contacted', class: 'badge-contacted' },
      qualified: { label: 'Qualified', class: 'badge-qualified' },
      lost: { label: 'Lost', class: 'badge-lost' },
      confirmed: { label: 'Confirmed', class: 'badge-confirmed' },
      pending: { label: 'Pending', class: 'badge-pending' },
      cancelled: { label: 'Cancelled', class: 'badge-cancelled' },
      completed: { label: 'Completed', class: 'badge-completed' },
      active: { label: 'Active', class: 'badge-active' },
      inactive: { label: 'Inactive', class: 'badge-inactive' },
      checkout_today: { label: 'Checkout Today', class: 'badge-checkout' },
    };
    const s = map[status] || { label: status, class: 'badge-default' };
    return `<span class="badge ${s.class}">${s.label}</span>`;
  },

  getServiceIcon(service) {
    const icons = { boarding: '🏠', grooming: '✂️', swimming: '🏊' };
    return icons[service] || '🐾';
  },

  toast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
  },

  debounce(fn, delay) {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
  }
};
