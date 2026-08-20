const formatAppointmentDateTime = (date: Date) => [
  date.getFullYear(),
  String(date.getMonth() + 1).padStart(2, '0'),
  String(date.getDate()).padStart(2, '0')
].join('-') + 'T' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');

const getTomorrowMorningAppointmentTime = () => {
  const tomorrowMorning = new Date();

  tomorrowMorning.setDate(tomorrowMorning.getDate() + 1);
  tomorrowMorning.setHours(9, 30, 0, 0);

  return formatAppointmentDateTime(tomorrowMorning);
};

export function BookingSection() {
  const now = new Date();
  const minAppointmentTime = formatAppointmentDateTime(now);
  const defaultAppointmentTime = getTomorrowMorningAppointmentTime();

  return (
    <section className="section" id="contact">
      <div className="section-head"><div><h2>预约咨询</h2><p>填写信息后我们会尽快确认时间。</p></div></div>
      <div className="contact">
        <form className="form">
          <div className="field-grid">
            <div><label htmlFor="name">家长姓名</label><input id="name" type="text" placeholder="请输入姓名" /></div>
            <div><label htmlFor="phone">联系电话</label><input id="phone" type="tel" placeholder="请输入手机号" /></div>
            <div><label htmlFor="pet">宠物名字</label><input id="pet" type="text" placeholder="例如：雪球" /></div>
            <div><label htmlFor="type">宠物类型</label><select id="type"><option>狗狗</option><option>猫咪</option><option>其他</option></select></div>
            <div><label htmlFor="service">想要服务</label><select id="service"><option>基础洗护</option><option>美容修剪</option><option>耳道护理</option><option>深度护理</option></select></div>
            <div><label htmlFor="appointment-time">期望到店时间</label><input id="appointment-time" name="appointmentTime" type="datetime-local" min={minAppointmentTime} defaultValue={defaultAppointmentTime} required /></div>
          </div>
          <div style={{ marginTop: 12 }}><label htmlFor="note">补充说明</label><textarea id="note" placeholder="例如：怕吹风、容易打结、需要剪指甲等" /></div>
          <div className="actions"><button className="btn btn-primary" type="button">提交预约</button><button className="btn btn-secondary" type="button">联系门店</button></div>
        </form>
        <aside className="info">
          <div className="info-item"><div className="icon" style={{ margin: 0 }}>📍</div><div><b>门店地址</b><p>上海市某某区幸福路 88 号 1 层</p></div></div>
          <div className="info-item"><div className="icon" style={{ margin: 0 }}>⏰</div><div><b>营业时间</b><p>周一至周日 10:00 - 20:00</p></div></div>
          <div className="info-item"><div className="icon" style={{ margin: 0 }}>☎️</div><div><b>联系电话</b><p>138-0000-0000</p></div></div>
        </aside>
      </div>
    </section>
  );
}
